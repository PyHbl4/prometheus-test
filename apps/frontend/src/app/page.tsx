const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Тестовое задание. Автор: Максим Рунков</h1>
      <p className="text-lg text-center mb-6">
        Данный проект представляет собой веб-приложение для управления каталогом товаров. 
        Он разработан с использованием фреймворка Next.js для фронтенда и NestJS для бэкенда. 
        В приложении реализованы функции фильтрации и сортировки товаров, а также интеграция с базой данных через Prisma. 
        Используются технологии React, TypeScript и Axios для выполнения HTTP-запросов.
      </p>
      <a href="/products" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Перейти к каталогу товаров
      </a>
    </div>
  );
};

export default HomePage;
