import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthToken = '@loginStatus';

const storeItem = async (value) => {
  try {
    await AsyncStorage.setItem(AuthToken, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
};

const getItem = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('token');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
  }
};

const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (e) {
    return null;
  }
};

export default { storeItem, getItem, removeValue };
