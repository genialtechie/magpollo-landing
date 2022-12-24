const prisma = require('./prisma-client');

async function main() {
  const soups = await prisma.category.create({
    data: {
      name: 'Soups & Stews',
      slug: 'soups-stews',
      products: {
        create: {
          name: 'Vegetable Soup',
          slug: 'vegetable-soup',
          featured: true,
          description:
            'A flavorful vegetable soup with lots of fish pieces and veggies. This dish sings all the notes your taste buds want to hear.',
          price: 20,
          image_url:
            'https://res.cloudinary.com/dpti4rlt1/image/upload/v1671815171/african-soul-food/soulfood2_dz4u2x.png',
        },
      },
    },
  });

  const meals = await prisma.category.create({
    data: {
      name: 'Meals',
      slug: 'meals',
      products: {
        create: {
          name: 'Jollof Rice',
          slug: 'jollof-rice',
          featured: true,
          description:
            'Long grain rice cooked with tomatoes, onions, and spices. This dish is a staple in West Africa and is a must try.',
          price: 20,
          image_url:
            'https://res.cloudinary.com/dpti4rlt1/image/upload/v1671815172/african-soul-food/soulfood1_wdzodr.png',
        },
      },
    },
  });

  const sides = await prisma.category.create({
    data: {
      name: 'Sides',
      slug: 'sides',
      products: {
        create: {
          name: 'Spicy Suya',
          slug: 'spicy-suya',
          featured: true,
          description:
            'Stake seasoned with a blend of spices and grilled to perfection. Served with onions and celery. This dish is a must try for anyone who loves spicy food.',
          price: 15,
          image_url:
            'https://res.cloudinary.com/dpti4rlt1/image/upload/v1671815171/african-soul-food/soulfood3_u9odez.png',
        },
      },
    },
  });

  console.log({ soups, meals, sides });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
