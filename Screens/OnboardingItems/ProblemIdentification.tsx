import React from 'react';
import { View, Image, Text } from 'react-native';
import { CLOUDFRONT_URL } from '@/utils/env';


const registration3 = `${CLOUDFRONT_URL}/zypserMedia/registration3.webp`;
const registration4 = `${CLOUDFRONT_URL}/zypserMedia/registration4.webp`;

const ProblemIdentification = () => {
  return (
    <View className="flex-1 items-center gap-[100px]">
      {/* Stack of two image cards */}
      <View className="w-full">
        {/* Top image + pill */}
        <View className="relative">
          <View className="w-full h-[146px] rounded-3xl overflow-hidden z-40">
            <Image source={{ uri: registration3 }} className="w-full min-w-[320px] h-full" resizeMode="cover" />
          </View>
          <View className="absolute left-1/2 -bottom-[20px] -translate-x-1/2 bg-white rounded-full px-4 py-[12px] shadow-lg w-[260px] items-center z-40 overflow-visible">
            <View className="text-slate-900 font-semibold text-[16px] leading-[100%] flex-row items-center gap-2">
              {/* <View>{getIconComponent('connect')}</View> */}
              <Text>Transparent Workflow</Text>
            </View>
          </View>
        </View>

      
        {/* Bottom image + pill */}
        <View className="relative mt-3">
          <View className="w-full h-[146px] rounded-3xl overflow-hidden">
            <Image source={{ uri: registration4 }} className="w-full h-full" resizeMode="cover" />
          </View>

          {/* Bottom pill (overlaps bottom edge of bottom image) */}
          <View className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-3 shadow-lg w-[220px] items-center">
            <View className="text-slate-900 font-semibold text-[16px] leading-[100%] flex-row items-center gap-2">
              {/* <View>{getIconComponent('phone')}</View> */}
              <Text>Quick Support</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Headline */}
      <View className="px-6">
        <Text className="text-center text-[24px] leading-[100%] font-medium text-slate-900">
          <Text className="text-primaryButton text-[24px] font-medium leading-[100%] italic">Quick</Text> Identification of{'\n'}
          customer's <Text className="text-primaryButton text-[24px] font-medium leading-[100%]">problems</Text>
        </Text>
      </View>
    </View>
  );
};

export default ProblemIdentification; 