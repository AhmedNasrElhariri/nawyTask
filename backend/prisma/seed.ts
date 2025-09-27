import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  const apartments = [
    {
      unitName: 'Luxury Studio',
      unitNumber: 'A101',
      project: 'Sunset Heights',
      bedrooms: 1,
      bathrooms: 1,
      area: 650.0,
      rent: 2500.0,
      description: 'Modern studio apartment with stunning city views and premium finishes.',
      imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      address: '123 Sunset Blvd, Downtown',
      amenities: ['Pool', 'Gym', 'Parking', 'Balcony', 'Air Conditioning']
    },
    {
      unitName: 'Executive Suite',
      unitNumber: 'B205',
      project: 'Marina Plaza',
      bedrooms: 2,
      bathrooms: 2,
      area: 1200.0,
      rent: 3800.0,
      description: 'Spacious 2-bedroom apartment with marina views and modern amenities.',
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      address: '456 Marina Way, Waterfront District',
      amenities: ['Pool', 'Gym', 'Concierge', 'Parking', 'Balcony', 'In-unit Laundry']
    },
    {
      unitName: 'Garden View',
      unitNumber: 'C301',
      project: 'Green Valley',
      bedrooms: 3,
      bathrooms: 2,
      area: 1450.0,
      rent: 4200.0,
      description: 'Family-friendly apartment with garden views and plenty of space.',
      imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
      address: '789 Garden St, Suburban Heights',
      amenities: ['Playground', 'Gym', 'Parking', 'Garden Access', 'Pet Friendly']
    },
    {
      unitName: 'City Loft',
      unitNumber: 'D101',
      project: 'Urban Towers',
      bedrooms: 1,
      bathrooms: 1,
      area: 800.0,
      rent: 2800.0,
      description: 'Industrial-style loft in the heart of the city with exposed brick walls.',
      imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
      address: '321 Urban Ave, City Center',
      amenities: ['Rooftop Deck', 'Gym', '24/7 Security', 'High Ceilings']
    },
    {
      unitName: 'Penthouse Suite',
      unitNumber: 'P501',
      project: 'Skyline Residences',
      bedrooms: 4,
      bathrooms: 3,
      area: 2200.0,
      rent: 8500.0,
      description: 'Luxury penthouse with panoramic city views and premium amenities.',
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      address: '555 Skyline Dr, Uptown',
      amenities: ['Private Elevator', 'Rooftop Terrace', 'Concierge', 'Wine Cellar', 'Smart Home']
    },
    {
      unitName: 'Cozy Corner',
      unitNumber: 'E102',
      project: 'Sunset Heights',
      bedrooms: 1,
      bathrooms: 1,
      area: 580.0,
      rent: 2200.0,
      description: 'Charming corner unit with lots of natural light and modern updates.',
      imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      address: '123 Sunset Blvd, Downtown',
      amenities: ['Pool', 'Gym', 'Corner Windows', 'Updated Kitchen']
    }
  ];

  for (const apartment of apartments) {
    await prisma.apartment.create({
      data: apartment
    });
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });