import PrismaClient from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  // Создание категорий
  const category1 = await prisma.categories.create({
    data: {
      id: 1,
      name: 'Жирафы',
    },
  });

  const category2 = await prisma.categories.create({
    data: {
      id: 2,
      name: 'Слоны',
    },
  });

  // Создание товаров
  await prisma.products.createMany({
    data: [
      {
        name: 'жираф',
        slug: 'zhiraf_1_blue_2',
        categoryId: category1.id,
        color: 'синий',
        height: 2,
      },
      {
        name: 'жираф',
        slug: 'zhiraf_1_blue_3',
        categoryId: category1.id,
        color: 'синий',
        height: 3,
      },
      {
        name: 'жираф',
        slug: 'zhiraf_1_blue_4',
        categoryId: category1.id,
        color: 'синий',
        height: 4,
      },
      {
        name: 'жираф',
        slug: 'zhiraf_1_yellow_2',
        categoryId: category1.id,
        color: 'желтый',
        height: 2,
      },
      {
        name: 'жираф',
        slug: 'zhiraf_1_yellow_2_2',
        categoryId: category1.id,
        color: 'желтый',
        height: 2,
      },
      {
        name: 'жираф',
        slug: 'zhiraf_1_yellow_3',
        categoryId: category1.id,
        color: 'желтый',
        height: 3,
      },
      {
        name: 'жираф',
        slug: 'zhiraf_1_pink_4',
        categoryId: category1.id,
        color: 'розовый',
        height: 4,
      },
      {
        name: 'жираф',
        slug: 'zhiraf_1_pink_2',
        categoryId: category1.id,
        color: 'розовый',
        height: 2,
      },
      {
        name: 'жираф',
        slug: 'zhiraf_1_pink_3',
        categoryId: category1.id,
        color: 'розовый',
        height: 3,
      },
      {
        name: 'слон',
        slug: 'slon_1_blue_2',
        categoryId: category2.id,
        color: 'синий',
        height: 2,
      },
      {
        name: 'слон',
        slug: 'slon_1_blue_3',
        categoryId: category2.id,
        color: 'синий',
        height: 3,
      },
      {
        name: 'слон',
        slug: 'slon_1_blue_4',
        categoryId: category2.id,
        color: 'синий',
        height: 4,
      },
      {
        name: 'слон',
        slug: 'slon_1_yellow_2',
        categoryId: category2.id,
        color: 'желтый',
        height: 2,
      },
      {
        name: 'слон',
        slug: 'slon_1_yellow_2_2',
        categoryId: category2.id,
        color: 'желтый',
        height: 2,
      },
      {
        name: 'слон',
        slug: 'slon_1_yellow_3',
        categoryId: category2.id,
        color: 'желтый',
        height: 3,
      },
      {
        name: 'слон',
        slug: 'slon_1_pink_4',
        categoryId: category2.id,
        color: 'розовый',
        height: 4,
      },
      {
        name: 'слон',
        slug: 'slon_1_pink_2',
        categoryId: category2.id,
        color: 'розовый',
        height: 2,
      },
      {
        name: 'слон',
        slug: 'slon_1_pink_3',
        categoryId: category2.id,
        color: 'розовый',
        height: 3,
      },
    ],
  });

  console.log('Данные успешно добавлены!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
