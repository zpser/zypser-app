import React, { useMemo, useState } from 'react';
import { View, useWindowDimensions, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { RoutePaths } from '@/features/router/router.constants';
import CustomSwiper from '@/components/CustomSwiper';
import NoMiddlemen from './OnboardingItems/NoMiddlemen';
import GrowYourBusiness from './OnboardingItems/GrowYourBusiness';
import ProblemIdentification from './OnboardingItems/ProblemIdentification';

const JoinOurNetwork = () => {
  const insets = useSafeAreaInsets();
  const { height: screenH } = useWindowDimensions();

  const [headerH, setHeaderH] = useState(0);
  const [footerH, setFooterH] = useState(0);

  const swiperH = useMemo(() => {
    const h = screenH - insets.top - insets.bottom - headerH - footerH - 16;
    return Math.max(260, Math.min(h, 560));
  }, [screenH, insets.top, insets.bottom, headerH, footerH]);

  const handleSignUpClick = () => router.push(RoutePaths.Signup);
  const handleLoginClick = () => router.push(RoutePaths.Login);

  return (
    <SafeAreaView className="flex-1 bg-allStone" edges={['top','bottom','left','right']}>
      <View className="flex-1 w-full max-w-md self-center">
        <View className="px-4 pt-2" onLayout={e => setHeaderH(e.nativeEvent.layout.height)}>
          <Text className="text-lg font-semibold italic text-center">
            <Text className="text-primaryButton">zypser</Text> partners
          </Text>
        </View>

        <View className="flex-1 items-center justify-center px-3" style={{ height: swiperH }}>
          <CustomSwiper
            height={swiperH}
            slidesPerView={1}
            delay={3000}
            autoScroll
            showDots
            className='flex'
          >
            <NoMiddlemen />
            <GrowYourBusiness />
            <ProblemIdentification />
          </CustomSwiper>
        </View>

        {/* Bottom buttons (safe-area padded) */}
        <View
          className="w-full items-center justify-center gap-4 px-4 pt-2 flex-row"
          onLayout={e => setFooterH(e.nativeEvent.layout.height + insets.bottom + 12)}
          style={{ paddingBottom: insets.bottom + 12 }}
        >
          <TouchableOpacity
            className="flex-1 bg-secondaryButton rounded-full h-[3.438rem] justify-center items-center"
            onPress={handleLoginClick}
          >
            <Text className="font-bold text-slate-900 text-[16px]">Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 bg-primaryButton rounded-full h-[3.438rem] justify-center items-center"
            onPress={handleSignUpClick}
          >
            <Text className="text-white text-[16px]">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default JoinOurNetwork; 