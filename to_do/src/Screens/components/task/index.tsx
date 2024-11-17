import { Text, TouchableOpacity, View } from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";

import { globalColors } from "../../../GlobalStyles";
import styles from "./style";

interface Props {
	task: {
		name: string;
		done: boolean;
		id: number;
	};
	onTask: (id: number) => void;
	onRemove: (id: number) => void;
}

export function Task({ task, onTask, onRemove }: Props) {
	return (
		<TouchableOpacity style={styles.container} onPress={() => onTask(task.id)}>
			{task.done ? (
				<View style={styles.buttonUncheck}>
					<Entypo name="check" size={20} color="white" />
				</View>
			) : (
				<View style={styles.buttonCheck} />
			)}

			<View style={styles.containerText}>
				{task.done ? (
					<Text
						style={[
							styles.text,
							{
								textDecorationLine: "line-through",
								color: globalColors.cinzaClaro,
							},
						]}
					>
						{task.name}
					</Text>
				) : (
					<Text style={styles.text}>{task.name}</Text>
				)}
			</View>

			<TouchableOpacity onPress={() => onRemove(task.id)}>
				<FontAwesome5
					name="trash-alt"
					size={24}
					color={globalColors.cinzaClaro}
				/>
			</TouchableOpacity>
		</TouchableOpacity>
	);
}
