import * as localForage from "localforage";

export const remove = async(key) => {
    try {
        await localForage.removeItem(key); 
    }catch (error) {
        
    }
}

export const get = async (key) => {
    try {
        const value = await localForage.getItem(key);
        return value;
    } catch (err) {
       return null;
    }
}

export const set = async(key, value) => {
    try {
      const result = JSON.stringify(value)
      await remove(key);
      await localForage.setItem(key, result);
    } catch (error) {
        
    }
}

export const clear = async () => {
    try {
        await localForage.clear();
    } catch (error) {
        return ;
    }
}

