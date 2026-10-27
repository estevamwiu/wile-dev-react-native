import {
  Alert,
  Animated,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Footer from "../components/Footer";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import SocialButton from "../components/SocialButton";
import WileDevIllustration from "../components/WileDevIllustration";
import useFadeIn from "../hooks/useFadeIn";
import { useTheme } from "../theme/ThemeContext";

const REDES = [
  {
    icon: "logo-github",
    label: "GitHub - William",
    url: "https://github.com/estevamwiu",
  },
  {
    icon: "logo-linkedin",
    label: "LinkedIn - William",
    url: "https://www.linkedin.com/in/estevamwiu/",
  },
  {
    icon: "logo-github",
    label: "GitHub - Leonidas",
    url: "https://github.com/Leonidascaliel",
  },
  {
    icon: "logo-linkedin",
    label: "LinkedIn - Leonidas",
    url: "https://www.linkedin.com/in/leonidascaliel/",
  },
];

export default function HomeScreen({ navigation }) {
  const { colors, isDark, toggleTheme } = useTheme();
  const fadeIn = useFadeIn();

  function handleSwitch() {
    Alert.alert("Switch pressionado");
    toggleTheme();
  }

  return (
    <SafeAreaView
      edges={["top"]}
      style={[styles.safe, { backgroundColor: colors.background }]}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <WileDevIllustration />

        <Animated.View style={fadeIn}>
          <Text style={[styles.title, { color: colors.text }]}>
            Eleve seu negócio digital a outro nível{" "}
            <Text style={{ color: colors.accent }}>
              com um Front-end de qualidade!
            </Text>
          </Text>

          <Text style={[styles.description, { color: colors.textSoft }]}>
            Olá! Somos a WILE.DEV, desenvolvemos sites dinâmicos e funcionais em
            React, HTML e CSS. Ajudamos pequenos negócios e designers a
            colocarem em prática boas ideias. Vamos conversar?
          </Text>

          <View style={styles.buttons}>
            <PrimaryButton
              title="Sobre nós"
              onPress={() => navigation.navigate("Sobre")}
            />
            <PrimaryButton
              title="Entre em contato"
              onPress={() => Alert.alert("Entre em contato")}
            />
          </View>

          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Acesse nossas redes:
          </Text>

          <View style={styles.switchRow}>
            <Text style={[styles.switchLabel, { color: colors.text }]}>
              Alterar visualização
            </Text>
            <Switch
              value={isDark}
              onValueChange={handleSwitch}
              trackColor={{ false: "#8A98A8", true: colors.accent }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={styles.socials}>
            {REDES.map((rede) => (
              <SocialButton key={rede.label} {...rede} />
            ))}
          </View>
        </Animated.View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 28,
    width: "100%",
    maxWidth: 520,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 32,
    marginTop: 24,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 16,
  },
  buttons: { gap: 12, marginTop: 24 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 28,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
    marginBottom: 14,
  },
  switchLabel: { fontSize: 14 },
  socials: { gap: 12 },
});
