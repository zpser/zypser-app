import React, { useState, useRef, useMemo } from 'react';
import { View, Pressable, LayoutChangeEvent, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface CustomSwiperProps {
  children: React.ReactNode[];
  slidesPerView?: number;
  delay?: number;
  showDots?: boolean;
  className?: string;
  autoScroll?: boolean;
  height?: number;
}

const { width: fallbackWidth } = Dimensions.get('window');

const DOT_SIZE = 8;
const PILL_WIDTH = 22;
const PILL_HEIGHT = 8;
const DOT_GAP = 8;

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  children,
  slidesPerView = 1,
  delay = 3000,
  showDots = true,
  className = '',
  autoScroll = true,
  height = 320,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerW, setContainerW] = useState(fallbackWidth);
  const carouselRef = useRef<any>(null);

  const data = useMemo(() => children, [children]);

  const onLayout = (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    if (w && w !== containerW) setContainerW(w);
  };

  const renderItem = ({ item }: { item: React.ReactNode }) => (
    <View style={{ width: containerW, height }} className="items-center justify-center px-2">
      {item}
    </View>
  );

  return (
    <View
      className={`w-full self-center ${className}`}
      style={{ height }}
      onLayout={onLayout}
    >
      <Carousel
        ref={carouselRef}
        loop
        width={containerW}            // <-- use measured width
        height={height}
        data={data}
        renderItem={renderItem}
        autoPlay={autoScroll}
        autoPlayInterval={delay}
        scrollAnimationDuration={1000}
              // avoid parallax bleed
        onProgressChange={(_, abs) => {
          const idx = Math.round(abs);
          if (idx !== currentIndex) setCurrentIndex(idx);
        }}
      />
      {showDots && (
        <View style={{ gap: DOT_GAP }} className="flex-row justify-center items-center mt-4">
          {data.map((_, index) => {
            const active = index === currentIndex;
            return (
              <Pressable
                key={index}
                onPress={() => carouselRef.current?.scrollTo({ index, animated: true })}
                hitSlop={10}
                style={{
                  width: active ? PILL_WIDTH : DOT_SIZE,
                  height: active ? PILL_HEIGHT : DOT_SIZE,
                  borderRadius: PILL_HEIGHT / 2,
                  backgroundColor: active ? '#7D4DEE' : '#E7E9EB',
                }}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

export default CustomSwiper;
