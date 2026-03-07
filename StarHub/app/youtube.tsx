import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function YouTube() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="logo-youtube" size={32} color="red" />
          <Text style={styles.ytLogo}>YouTube</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 20}}>
          <MaterialCommunityIcons name="cast" size={24} color="white" />
          <Ionicons name="notifications-outline" size={24} color="white" />
          <Ionicons name="search" size={24} color="white" />
        </View>
      </View>
      <ScrollView>
        <View style={styles.videoCard}>
          {/* THUMBNAIL DO S24 ULTRA */}
          <Image 
            source={{ uri: 'https://images.samsung.com/br/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-orange-back-mo.jpg?imbypass=true' }} 
            style={styles.thumbnail} 
            resizeMode="cover"
          />
          <View style={styles.videoInfo}>
            <Image source={{ uri: 'https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/256_144_2.png?$512_N_PNG$' }} style={styles.ytAvatar} />
            <View style={{flex: 1}}>
              <Text style={styles.vTitle}>Samsung Galaxy S24 Ultra: Review Completo</Text>
              <Text style={styles.vSub}>Tecnologia Hoje • 540 mil visualizações • há 3 dias</Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={20} color="white" />
          </View>
        </View>
        <View style={styles.videoCard}>
          {/* CAZÉ TV*/}
          <Image 
            source={{ uri: 'https://i.ytimg.com/vi/UB7Qsy-w_Fc/maxresdefault.jpg' }} 
            style={styles.thumbnail} 
            resizeMode="cover"
          />
          <View style={styles.videoInfo}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcD_w1URxUw9ql3bND2JFR63w0amX52fnmnw&s' }} style={styles.ytAvatar} />
            <View style={{flex: 1}}>
              <Text style={styles.vTitle}>BRASIL 1 (2) X (4) 1 CROÁCIA | MELHORES MOMENTOS... mais</Text>
              <Text style={styles.vSub}>CazéTV • 7,2 milhões visualizações • há 4 anos</Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={20} color="white" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, paddingTop: 50 },
  ytLogo: { color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 5 },
  videoCard: { width: '100%', marginBottom: 15 },
  thumbnail: { width: '100%', height: 220 },
  videoInfo: { flexDirection: 'row', padding: 12 },
  ytAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  vTitle: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  vSub: { color: '#aaa', fontSize: 12, marginTop: 4 }
});