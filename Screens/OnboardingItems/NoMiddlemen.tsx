import React from 'react';
import { View, Image, Platform, Text } from 'react-native';
import { CLOUDFRONT_URL } from '@/utils/env';

const IMG_URI = `${CLOUDFRONT_URL}/zypserMedia/registration1.webp`;

const NoMiddlemen = () => {
  return (
    <View className="flex-1 items-center px-2 gap-10">
      <View className="relative">
        {/* Image card */}
        <View className="w-72 h-[345px] rounded-3xl overflow-hidden">
          <Image
            source={{ uri: IMG_URI }}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>

        {/* Top-right pill: Zero Commission */}
        <View
          className="absolute top-[27px] -right-6 bg-white px-4 py-2 rounded-full shadow-lg"
          style={Platform.select({
            android: { elevation: 6 },
          })}
        >
          <Text className="text-slate-900 font-semibold text-[16px] leading-[100%] text-center">
            <Text className="text-primaryButton font-bold">%</Text> Zero Commission
          </Text>
        </View>

        {/* Left-middle pill: Instant Pay */}
        <View
          className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-lgr"
          style={Platform.select({
            android: { elevation: 6 },
          })}
        >
          <View className="text-slate-900 font-semibold text-sm whitespace-nowrap flex-row items-center gap-2">
            <Text>Instant Pay</Text>
          </View>
        </View>
      </View>

      {/* Headline under card */}
      <View className="px-6">
        <Text className="text-center text-[24px] leading-[100%] font-medium text-slate-900">
          <Text className="text-primaryButton text-[24px] font-medium leading-[100%] italic">no</Text> middlemen, commission cuts, & upfront investment
        </Text>
      </View>
    </View>
  );
};

export default NoMiddlemen; 