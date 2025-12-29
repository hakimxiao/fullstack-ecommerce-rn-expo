import mongoose from "mongoose";
import { Product } from "../models/product.model.js";
import { ENV } from "../configs/env.js";

const products = [
  {
    name: "Headphone Bluetooth Nirkabel",
    description:
      "Headphone over-ear premium dengan fitur peredam bising aktif, daya tahan baterai hingga 30 jam, dan kualitas suara terbaik. Cocok untuk pecinta musik dan traveler.",
    price: 2399840,
    stock: 50,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    ],
    averageRating: 4.5,
    totalReviews: 128,
  },
  {
    name: "Smartwatch Seri 5",
    description:
      "Jam pintar dengan pelacakan kebugaran canggih, pemantau detak jantung, GPS, dan desain tahan air. Tetap terhubung dengan notifikasi dan aplikasi langsung di pergelangan tangan.",
    price: 4799840,
    stock: 35,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    ],
    averageRating: 4.7,
    totalReviews: 256,
  },
  {
    name: "Tas Selempang Kulit",
    description:
      "Tas kulit asli buatan tangan dengan tali yang dapat disesuaikan. Dilengkapi beberapa kompartemen dan desain elegan untuk penggunaan sehari-hari.",
    price: 1439840,
    stock: 25,
    category: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
    ],
    averageRating: 4.3,
    totalReviews: 89,
  },
  {
    name: "Sepatu Lari Pro Edition",
    description:
      "Sepatu lari ringan dengan bantalan responsif dan bagian atas mesh yang bernapas. Dirancang untuk performa dan kenyamanan saat lari jarak jauh.",
    price: 2079840,
    stock: 60,
    category: "Sports",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    ],
    averageRating: 4.6,
    totalReviews: 342,
  },
  {
    name: "Novel Misteri Terlaris",
    description:
      "Novel thriller psikologis yang menegangkan dan membuat pembaca penasaran. Bestseller New York Times dengan lebih dari 1 juta kopi terjual.",
    price: 399840,
    stock: 100,
    category: "Books",
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    ],
    averageRating: 4.8,
    totalReviews: 1243,
  },
  {
    name: "Speaker Bluetooth Portabel",
    description:
      "Speaker nirkabel tahan air dengan suara 360 derajat, baterai hingga 12 jam, dan desain kokoh. Cocok untuk aktivitas luar ruangan.",
    price: 1279840,
    stock: 45,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
    ],
    averageRating: 4.4,
    totalReviews: 167,
  },
  {
    name: "Jaket Denim Klasik",
    description:
      "Jaket denim klasik dengan efek wash vintage dan potongan nyaman. Item wajib yang mudah dipadukan dengan berbagai gaya.",
    price: 1119840,
    stock: 40,
    category: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500",
    ],
    averageRating: 4.2,
    totalReviews: 95,
  },
  {
    name: "Matras Yoga Pro",
    description:
      "Matras yoga ekstra tebal anti slip dengan tali pembawa. Material ramah lingkungan dengan bantalan dan daya cengkeram optimal.",
    price: 799840,
    stock: 75,
    category: "Sports",
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500",
    ],
    averageRating: 4.5,
    totalReviews: 203,
  },
  {
    name: "Keyboard Mekanik RGB",
    description:
      "Keyboard gaming dengan lampu RGB yang dapat dikustomisasi, switch mekanik, dan tombol yang dapat diprogram. Cocok untuk gamer dan pengetik profesional.",
    price: 1919840,
    stock: 30,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    ],
    averageRating: 4.7,
    totalReviews: 421,
  },
  {
    name: "Buku Meja Kopi Koleksi Fotografi",
    description:
      "Buku fotografi menakjubkan yang menampilkan arsitektur dan desain dari seluruh dunia. Edisi hardcover dengan lebih dari 300 halaman inspirasi.",
    price: 639840,
    stock: 55,
    category: "Books",
    images: [
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500",
    ],
    averageRating: 4.6,
    totalReviews: 134,
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(ENV.DB_URL);
    console.log("✅ Connected to MongoDB");

    // Clear existing products
    await Product.deleteMany({});
    console.log("🗑️  Cleared existing products");

    // Insert seed products
    await Product.insertMany(products);
    console.log(`✅ Successfully seeded ${products.length} products`);

    // Display summary
    const categories = [...new Set(products.map((p) => p.category))];
    console.log("\n📊 Seeded Products Summary:");
    console.log(`Total Products: ${products.length}`);
    console.log(`Categories: ${categories.join(", ")}`);

    // Close connection
    await mongoose.connection.close();
    console.log("\n✅ Database seeding completed and connection closed");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
