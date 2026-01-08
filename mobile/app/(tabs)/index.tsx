import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import SafeScreen from "@/components/SafeScreen";
import { Ionicons } from "@expo/vector-icons";
import ProductsGrid from "@/components/ProductsGrid";
import useProducts from "@/hooks/useProducts";

import * as Sentry from "@sentry/react-native";

const CATEGORIES = [
  { name: "All", icon: "grid-outline" as const },
  { name: "Electronics", images: require("@/assets/images/electronics.png") },
  { name: "Fashion", images: require("@/assets/images/fashion.png") },
  { name: "Sports", images: require("@/assets/images/sports.png") },
  { name: "Books", images: require("@/assets/images/books.png") },
];

const ShopScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: products, isLoading, isError } = useProducts();

  const filteredProduct = useMemo(() => {
    if (!products) return [];

    let filltered = products;

    // Filltering by category
    if (selectedCategory !== "All") {
      filltered = filltered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // FIlltering by search query
    if (searchQuery.trim()) {
      filltered = filltered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filltered;
  }, [products, selectedCategory, searchQuery]);

  return (
    <SafeScreen>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View className="px-6 pb-4 pt-6">
          <View className="flex-row items-center justify-between mb-6">
            <View>
              <Text className="text-text-primary font-bold text-3xl tracking-light">
                Shop
              </Text>
              <Text className="text-text-secondary text-sm mt-1">
                Browse all product
              </Text>
            </View>

            <TouchableOpacity
              className="bg-surface/50 p-3 rounded-full"
              activeOpacity={0.7}
            >
              <Ionicons name="options-outline" size={22} color={"#fff"} />
            </TouchableOpacity>
          </View>

          {/* SEARCH BAR */}
          <View className="bg-surface flex-row items-center px-5 py-4 rounded-2xl">
            <Ionicons color={"#666"} size={22} name="search" />
            <TextInput
              placeholder="Search for product"
              placeholderTextColor={"#666"}
              className="flex-1 ml-3 text-base text-text-primary"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* CATEGORY FILTER */}
        <View className="mb-6">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category.name;
              return (
                <TouchableOpacity
                  key={category.name}
                  onPress={() => setSelectedCategory(category.name)}
                  className={`mr-3 rounded-2xl size-20 overflow-hidden items-center justify-center ${isSelected ? "bg-primary" : "bg-surface"}`}
                >
                  {category.icon ? (
                    <Ionicons
                      name={category.icon}
                      size={36}
                      color={isSelected ? "#121212" : "#fff"}
                    />
                  ) : (
                    <Image
                      source={category.images}
                      className="size-12"
                      resizeMode="contain"
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <Button
          title="Try!"
          onPress={() => {
            Sentry.captureException(new Error("First error"));
          }}
        />

        <View className="px-6 mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-text-primary text-lg font-bold">
              Products
            </Text>
            <Text className="text-text-secondary text-lg font-bold">
              {filteredProduct.length} Items
            </Text>
          </View>

          {/* PRODUCTS GRID */}
          <ProductsGrid
            products={filteredProduct}
            isLoading={isLoading}
            isError={isError}
          />
        </View>
      </ScrollView>
    </SafeScreen>
  );
};

export default ShopScreen;
