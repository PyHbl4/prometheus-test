import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll(
    color?: string[],
    height?: number[],
    orderBy?: string,
    order?: 'ASC' | 'DESC',
    categoryIds?: number[],
  ) {
    const heightNumbers = height
      ? height.map(Number).filter((num) => !isNaN(num))
      : undefined;
    const categoryIdsNums = categoryIds
    ? categoryIds.map(Number).filter((num) => !isNaN(num))
    : undefined;
    const where = {
      ...(color && color.length && Array.isArray(color)
        ? { color: { in: color } }
        : {}),
      ...(heightNumbers && heightNumbers.length && Array.isArray(heightNumbers)
        ? { height: { in: heightNumbers } }
        : {}),
      ...(categoryIdsNums && categoryIdsNums.length
        ? { categoryId: { in: categoryIdsNums } }
        : {}),
    };

    const sortOrder: 'asc' | 'desc' =
      order && order.toLowerCase() === 'asc' ? 'asc' : 'desc';

    const orderByField = orderBy
      ? { [orderBy]: sortOrder }
      : { id: 'desc' as 'asc' | 'desc' };

    const products = await this.prisma.products.findMany({
      where,
      include: {
        category: true,
      },
      orderBy: orderByField,
    });

    return products;
  }

  async findOneBySlug(slug: string) {
    const product = await this.prisma.products.findUnique({
      where: {
        slug: slug,
      },
    });
    if (product) {
      return product;
    } else {
      throw new NotFoundException('not_found', 'product not found');
    }
  }
}
