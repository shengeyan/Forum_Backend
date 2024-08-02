import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { ArticleItemProps } from './type';

@Injectable()
export class ServiceData {
  // 获取所有文章
  getArticleData(batch: number): ArticleItemProps[] {
    try {
      const markdownDir = path.join(process.cwd(), 'src', 'markdowns');
      if (!fs.existsSync(markdownDir)) {
        throw new InternalServerErrorException(
          'Markdown directory does not exist',
        );
      }

      let files = fs
        .readdirSync(markdownDir)
        .filter((file) => path.extname(file) === '.md');

      // 对文件名进行排序
      files = files.sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }),
      );

      // Calculate the start and end index
      const startIndex = (batch - 1) * 10;
      const endIndex = startIndex + 10;

      // Extract the required files
      const batchFiles = files.slice(startIndex, endIndex);

      // Read and parse the content of the files
      return batchFiles.map((file) =>
        this.parseMarkdownFile(path.join(markdownDir, file)),
      );
    } catch (error) {
      console.error('Error in getArticleData:', error);
      throw new InternalServerErrorException('Failed to get article data');
    }
  }

  // 获取特殊文章
  getSpecialArticle(ArticleName: string): {
    success: boolean;
    data: ArticleItemProps;
  } {
    try {
      const specialMarkdownDir = path.join(
        process.cwd(),
        'src',
        'specialMarkdowns',
      );
      const filePath = path.join(specialMarkdownDir, `${ArticleName}.md`);

      if (!fs.existsSync(filePath)) {
        throw new InternalServerErrorException(
          `Markdown file ${ArticleName}.md does not exist`,
        );
      }

      const articleData = this.parseMarkdownFile(filePath);
      return { success: true, data: articleData };
    } catch (error) {
      console.error('Error in getSpecialArticle:', error);
      throw new InternalServerErrorException(
        'Failed to get special article data',
      );
    }
  }

  private parseMarkdownFile(filePath: string): ArticleItemProps {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    const fileName = path.basename(filePath, '.md');

    return {
      id: fileName,
      title: data.title || 'Anonymous article',
      authorName: data.authorName || 'Anonym',
      authorAvatar:
        data.authorAvatar ||
        'https://raw.githubusercontent.com/shengeyan/image/master/2.png',
      content,
      imageUrl:
        data.imageUrl ||
        'https://raw.githubusercontent.com/shengeyan/image/master/2.png',
      likeCount: data.likeCount || 0,
      tags: Array.isArray(data.tags) ? data.tags : ['No labels'],
    };
  }
}
