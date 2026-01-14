import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
  ActivityIndicator,
  KeyboardAvoidingView, // ⬅️ untuk menghindari keyboard menutupi input
  Platform, // ⬅️ untuk membedakan behavior iOS & Android
} from "react-native";
import SafeScreen from "./SafeScreen";
import { Ionicons } from "@expo/vector-icons";

interface AddressFormData {
  label: string;
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  isDefault: boolean;
}

interface AddressFormModalProps {
  visible: boolean;
  isEditing: boolean;
  addressForm: AddressFormData;
  isAddingAddress: boolean;
  isUpdatingAddress: boolean;
  onClose: () => void;
  onSave: () => void;
  onFormChange: (form: AddressFormData) => void;
}

const AddressFormModal = ({
  visible,
  isEditing,
  addressForm,
  isAddingAddress,
  isUpdatingAddress,
  onClose,
  onSave,
  onFormChange,
}: AddressFormModalProps) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      {/* 
          KeyboardAvoidingView
          ====================
          Menghindari keyboard menutupi input field.
          - iOS  : padding
          - Android : height
        */}
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <SafeScreen>
          {/* HEADER */}
          <View className="px-6 py-5 border-b border-surface flex-row items-center justify-between">
            <Text className="text-text-primary text-2xl font-bold">
              {isEditing ? "Edit Address" : "Add Address"}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={28} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* 
            ScrollView
            ==========
            - keyboardShouldPersistTaps="handled"
              supaya tap input tetap bekerja saat keyboard terbuka
            - paddingBottom besar agar tombol Save tidak ketutup keyboard
          */}
          <ScrollView
            className="flex-1"
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingBottom: 50 }}
            showsVerticalScrollIndicator={false}
          >
            <View className="p-6">
              {/* LABEL INPUT */}
              <View className="mb-5">
                <Text className="text-text-primary font-semibold mb-2">
                  Label
                </Text>
                <TextInput
                  className="bg-surface text-text-primary px-4 py-3 rounded-2xl text-base"
                  style={{
                    lineHeight: 20, // ⬅️ mencegah huruf seperti g/y/p terpotong
                    textAlignVertical: "center", // ⬅️ penting untuk Android
                  }}
                  placeholder="e.g., Home, Work, Office"
                  placeholderTextColor="#666"
                  value={addressForm.label}
                  onChangeText={(text) =>
                    onFormChange({ ...addressForm, label: text })
                  }
                />
              </View>

              {/* NAME INPUT */}
              <View className="mb-5">
                <Text className="text-text-primary font-semibold mb-2">
                  Full Name
                </Text>
                <TextInput
                  className="bg-surface text-text-primary px-4 py-3 rounded-2xl text-base"
                  style={{
                    lineHeight: 20,
                    textAlignVertical: "center",
                  }}
                  placeholder="Enter your full name"
                  placeholderTextColor="#666"
                  value={addressForm.fullName}
                  onChangeText={(text) =>
                    onFormChange({ ...addressForm, fullName: text })
                  }
                />
              </View>

              {/* ADDRESS INPUT */}
              <View className="mb-5">
                <Text className="text-text-primary font-semibold mb-2">
                  Street Address
                </Text>
                <TextInput
                  className="bg-surface text-text-primary px-4 py-3 rounded-2xl text-base"
                  style={{
                    lineHeight: 20,
                    textAlignVertical: "center",
                  }}
                  placeholder="Street address, apt/suite number"
                  placeholderTextColor="#666"
                  value={addressForm.streetAddress}
                  onChangeText={(text) =>
                    onFormChange({ ...addressForm, streetAddress: text })
                  }
                />
              </View>

              {/* CITY INPUT */}
              <View className="mb-5">
                <Text className="text-text-primary font-semibold mb-2">
                  City
                </Text>
                <TextInput
                  className="bg-surface text-text-primary px-4 py-3 rounded-2xl text-base"
                  style={{
                    lineHeight: 20,
                    textAlignVertical: "center",
                  }}
                  placeholder="e.g., Tangerang"
                  placeholderTextColor="#666"
                  value={addressForm.city}
                  onChangeText={(text) =>
                    onFormChange({ ...addressForm, city: text })
                  }
                />
              </View>

              {/* STATE INPUT */}
              <View className="mb-5">
                <Text className="text-text-primary font-semibold mb-2">
                  State
                </Text>
                <TextInput
                  className="bg-surface text-text-primary px-4 py-3 rounded-2xl text-base"
                  style={{
                    lineHeight: 20,
                    textAlignVertical: "center",
                  }}
                  placeholder="e.g., Jakarta"
                  placeholderTextColor="#666"
                  value={addressForm.state}
                  onChangeText={(text) =>
                    onFormChange({ ...addressForm, state: text })
                  }
                />
              </View>

              {/* ZIP CODE INPUT */}
              <View className="mb-5">
                <Text className="text-text-primary font-semibold mb-2">
                  ZIP Code
                </Text>
                <TextInput
                  className="bg-surface text-text-primary px-4 py-3 rounded-2xl text-base"
                  style={{
                    lineHeight: 20,
                    textAlignVertical: "center",
                  }}
                  placeholder="e.g., Jakarta"
                  placeholderTextColor="#666"
                  value={addressForm.zipCode}
                  keyboardType="numeric"
                  onChangeText={(text) =>
                    onFormChange({ ...addressForm, zipCode: text })
                  }
                />
              </View>

              {/* PHONE INPUT */}
              <View className="mb-5">
                <Text className="text-text-primary font-semibold mb-2">
                  Phone Number
                </Text>
                <TextInput
                  className="bg-surface text-text-primary px-4 py-3 rounded-2xl text-base"
                  style={{
                    lineHeight: 20,
                    textAlignVertical: "center",
                  }}
                  placeholder="+62 81234567890"
                  placeholderTextColor="#666"
                  value={addressForm.phoneNumber}
                  onChangeText={(text) =>
                    onFormChange({ ...addressForm, phoneNumber: text })
                  }
                />
              </View>

              {/* DEFAULT ADDRESS TOGGLE */}
              <View className="bg-surface rounded-2xl p-4 flex-row items-center justify-between mb-6">
                <Text className="text-text-primary font-semibold">
                  Set as default address
                </Text>
                <Switch
                  value={addressForm.isDefault}
                  onValueChange={(value) =>
                    onFormChange({ ...addressForm, isDefault: value })
                  }
                  thumbColor="white"
                />
              </View>

              {/* SAVE BUTTON */}
              <TouchableOpacity
                className="bg-primary rounded-2xl py-5 items-center"
                activeOpacity={0.8}
                onPress={onSave}
                disabled={isAddingAddress || isUpdatingAddress}
              >
                {isAddingAddress || isUpdatingAddress ? (
                  <ActivityIndicator size="small" color="#121212" />
                ) : (
                  <Text className="text-background font-bold text-lg">
                    {isEditing ? "Save Changes" : "Add Address"}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeScreen>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddressFormModal;
