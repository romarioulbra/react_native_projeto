import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, StyleSheet } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

const users = [
  { id: "1", name: "Rebecca", image: "https://randomuser.me/api/portraits/women/1.jpg", lastMessage: "Claro", time:"12:30" },
  { id: "2", name: "Mãe", image: "https://randomuser.me/api/portraits/women/2.jpg", lastMessage: "Ok" , time:"12:50"},
  { id: "3", name: "Paulinho", image: "https://randomuser.me/api/portraits/men/3.jpg", lastMessage: "Beleza, estou indo" , time:"12:30"},
  { id: "4", name: "Renata", image: "https://randomuser.me/api/portraits/women/4.jpg", lastMessage: "Ele vai embora hj" , time:"12:30"},
  { id: "5", name: "Matheus", image: "https://randomuser.me/api/portraits/men/5.jpg", lastMessage: "Okay" , time:"12:30"},
  { id: "6", name: "Chico", image: "https://randomuser.me/api/portraits/men/6.jpg", lastMessage: "Fechou" , time:"12:30"},
  { id: "7", name: "Gustavo", image: "https://randomuser.me/api/portraits/men/7.jpg", lastMessage: "Ele não comentou nada" , time:"12:30"},
  { id: "8", name: "Carlos", image: "https://randomuser.me/api/portraits/men/8.jpg", lastMessage: "Vou chegar em 10 minutos" , time:"12:30"},
  { id: "9", name: "Juliana", image: "https://randomuser.me/api/portraits/women/9.jpg", lastMessage: "Aguardo sua confirmação" , time:"12:30"},
  { id: "10", name: "Lucas", image: "https://randomuser.me/api/portraits/men/10.jpg", lastMessage: "Estou no caminho" , time:"12:30"},
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.topRow}>
          <Text style={styles.title}>WhatsApp</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <View style={styles.iconWrapper}>
                <MaterialIcons name="photo-camera" size={24} color="white" style={styles.icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.iconWrapper}>
                <Feather name="more-vertical" size={24} color="white" style={styles.icon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput 
            style={styles.input} 
            placeholder="Pergunte a Meta AI ou Pesquise" 
            placeholderTextColor="#999"
          />
        </View>
      </View>

      {/* ScrollView apenas para a lista de usuários */}
      <ScrollView contentContainerStyle={styles.userList}>
        {users.map((user) => (
          <View key={user.id} style={styles.rowContainer}>
            <Image source={{ uri: user.image }} style={styles.profileImage} />
            <View style={styles.textContainer}>
              <Text style={styles.darkTitle}>{user.name}</Text>
              <Text style={styles.lightSubtitle}>{user.lastMessage}</Text>
            </View>
            <Text style={styles.timeText}>{user.time}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Menu de Rodapé fixo */}
      <View style={styles.footerMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="chat" size={24} color="#075E54" />
          <Text style={styles.menuText}>Conversas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="update" size={24} color="#075E54" />
          <Text style={styles.menuText}>Atualizações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="comment" size={24} color="#075E54" />
          <Text style={styles.menuText}>Comentários</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="call" size={24} color="#075E54" />
          <Text style={styles.menuText}>Ligações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 15,
    marginTop: 45,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    color: '#075E54',
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  iconWrapper: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  textContainer: {
    flex: 1,
  },
  darkTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  lightSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  timeText: {
    fontSize: 14,
    color: '#666',
    marginRight: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 5,
    marginRight: 10,
  },
  userList: {
    marginTop: 1,
    paddingBottom: 60, 
    marginLeft:7
  },
  footerMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    marginTop:67
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 12,
    color: '#075E54',
    marginTop: 5,
  },
});
