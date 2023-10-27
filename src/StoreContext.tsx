import { ReactNode, createContext } from 'react';
import { store } from './redux/reduxStore';

type Store = typeof store;
// type StoreKeys = keyof Store;
// type StoreValues = (typeof store)[StoreKeys];

interface ProviderProps {
    store: Store;
    children: ReactNode;
}

export const StoreContext = createContext<Store>(store);

export const Provider = (props: ProviderProps) => {
    return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>;
};

// export const useSelector = (selector: (state: Store) => StoreValues): StoreValues => {
//     const store = useContext(StoreContext);

//     return selector(store);
// };
