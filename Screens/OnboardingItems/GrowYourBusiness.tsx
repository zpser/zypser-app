import React from 'react';
import { View, Image, Platform, Text } from 'react-native';
import { CLOUDFRONT_URL } from '@/utils/env';

const IMG_URI = `${CLOUDFRONT_URL}/zypserMedia/Iphonemockup.webp`;

const GrowYourBusiness: React.FC = () => {
  return (
    <View className="flex-1 px-4 gap-10">
      {/* Phone mockup frame */}
      <View className="relative">
        <View className="relative w-[420px] h-[371px] rounded-2xl overflow-hidden">
          <Image
            source={{ uri: IMG_URI }}
            resizeMode="contain"
            className="w-full h-full"
          />

          <View
            className={[
              'absolute w-[330px] h-[30px] rounded-2xl bg-black/10',
              Platform.OS === 'ios' ? 'shadow-lg' : 'shadow-none',
            ].join(' ')}
            style={{
              left: '50%',
              top: '54%',
              transform: [{ translateX: -165 }, { translateY: -15 }],
            }}
          />

          <View
            className={[
              'absolute w-5/6 rounded-2xl bg-white border border-gray-100 p-[10px]',
              'px-3 py-2 justify-center',
              Platform.OS === 'ios' ? 'shadow-xl' : 'shadow-none',
            ].join(' ')}
            style={{
              left: '45%',
              top: '50%',
              transform: [{ translateX: -150 }, { translateY: -25 }],
            }}
          >
            <View className="flex-row items-start">
              <Text className="text-[#7D4DEE] italic font-bold text-[12px] mr-2 mt-[2px]">
                zypser
              </Text>

              <View className="flex-1">
                <View className="flex-row items-baseline justify-between">
                  <Text className="font-semibold text-[12px] leading-[15.37px]">
                    +120 Jobs ready Avg. Pay{' '}
                    <Text className="text-[#7D4DEE] font-semibold text-[12px] leading-[15.37px]">$500</Text>
                  </Text>
                  <Text className="text-gray-500 text-[9.99px] leading-[15.37px]">9:41 AM</Text>
                </View>
                <Text className="text-slate-800 font-regular text-[11.53px] leading-[15.37px]">
                  Hey, there explore the jobs now!
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* headline under the mock */}
      <View className="px-10">
        <Text className="text-center text-[24px] leading-[100%] font-medium text-slate-900">
          <Text className="text-primaryButton italic text-[24px] font-medium leading-[100%]">Book</Text> instantly.{'\n'}
          Pay only after the job.
        </Text>
      </View>
    </View>
  );
};

export default GrowYourBusiness; 