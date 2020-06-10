import React from 'react';
import {
  View,
  Text,
  Button as RNButton,
  StyleProp,
  ViewStyle
} from 'react-native';
import {
  Menu,
  MenuItem,
  MenuDivider,
  Position
} from '@breeffy/react-native-popup-menu';

interface ElementToStickProps {
  style?: StyleProp<ViewStyle>;
}

const ElementToStick = React.forwardRef<View, ElementToStickProps>(
  ({ style }, ref) => {
    return (
      <View
        ref={ref}
        style={[
          {
            padding: 16,
            borderColor: 'grey',
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center'
          },
          style
        ]}
      >
        <Text>Element to which menu is sticked</Text>
      </View>
    );
  }
);

interface ButtonProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const Button = ({ title, style, onPress }: ButtonProps) => {
  return (
    <View style={style}>
      <RNButton title={title} onPress={onPress} />
    </View>
  );
};

const App = () => {
  let elementRef = React.createRef<View>();
  let menuRef: Menu | null = null;

  const setMenuRef: (instance: Menu | null) => void = (ref) => (menuRef = ref);
  const hideMenu = () => menuRef?.hide();
  const showMenu = () => {
    menuRef?.show(elementRef.current, Position.TOP_LEFT);
  };

  const onPress = () => showMenu();
  return (
    <>
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ElementToStick ref={elementRef} />
        <Button
          style={{ position: 'absolute', bottom: 64 }}
          title={'Press to show menu'}
          onPress={onPress}
        />
        <Menu ref={setMenuRef}>
          <MenuItem onPress={hideMenu}>Item 1</MenuItem>
          <MenuItem onPress={hideMenu}>Item 2</MenuItem>
          <MenuItem onPress={hideMenu} disabled>
            Item 3
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={hideMenu}>Item 4</MenuItem>
        </Menu>
      </View>
    </>
  );
};

export default App;
