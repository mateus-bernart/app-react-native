import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import coffeeImg from "@/assets/images/coffee-splash.png";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ffac4d", dark: "#353636" }}
      headerImage={
        <Image
          source={coffeeImg}
          style={{ height: "100%", width: "100%" }}
        ></Image>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Contact Page</ThemedText>
      </ThemedView>
      <ThemedText>How can you meet us!</ThemedText>
      <Collapsible title="Location">
        <ThemedText>
          Location{" "}
          <ThemedText type="defaultSemiBold">hmm iced coffee</ThemedText> and{" "}
          <ThemedText type="defaultSemiBold">coffee with milk</ThemedText>
        </ThemedText>

        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Map">
        <ThemedText>A lot of sandwiches too</ThemedText>
      </Collapsible>
      <Collapsible title="Phone">
        <ThemedText>The snacks are the best part of the day!</ThemedText>
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Instagram">
        <ThemedText>to sweet your life a little bit.</ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#251664",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
