import { useEffect, useState } from "react";
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Foundation from "@expo/vector-icons/Foundation";

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./style";
import { Task } from "../components/task";
import { globalColors } from "../../GlobalStyles";

export interface TypeTask {
	name: string;
	done: boolean;
	id: number;
}

export function Home() {
	const [tasklist, setTasklist] = useState<TypeTask[]>([]);
	const [newTask, setNewTask] = useState<string>("");

	function handleTask(id: number) {
		setTasklist(
			tasklist.map((task) =>
				task.id === id ? { ...task, done: !task.done } : task,
			),
		);
	}

	function handleRemoveTask(id: number) {
		setTasklist(tasklist.filter((task) => task.id !== id));
	}

	function handleCreateTask(name: string) {
		if (name.trim().length > 0) {
			setTasklist([
				...tasklist,
				{
					name,
					done: false,
					id: tasklist.length > 0 ? tasklist.length + 1 : 0,
				},
			]);
			setNewTask("");
		}
	}

	useEffect(() => {
		const getData = async () => {
			try {
				const jsonValue = await AsyncStorage.getItem("my-tasks");
				setTasklist(jsonValue != null ? JSON.parse(jsonValue) : []);
			} catch (e) {
				// error reading value
			}
		};
		getData();
	}, []);

	useEffect(() => {
		const storeData = async () => {
			try {
				const jsonValue = JSON.stringify(tasklist);
				await AsyncStorage.setItem("my-tasks", jsonValue);
			} catch (e) {
				// saving error
			}
		};
		storeData();
	}, [tasklist]);

	return (
		<View style={styles.container}>
			<View style={styles.containerTitle}>
				<MaterialIcons name="rocket" size={30} color={globalColors.azul} />
				<Text style={styles.Title}>To</Text>
				<Text style={[styles.Title, { color: globalColors.roxo }]}>Do</Text>
			</View>

			<View style={styles.containerInput}>
				<TextInput
					value={newTask}
					onChangeText={setNewTask}
					style={styles.input}
					placeholder="Adicione uma nova tarefa"
					placeholderTextColor={"#808080"}
				/>
				<TouchableOpacity
					style={styles.button}
					activeOpacity={0.7}
					onPress={() => handleCreateTask(newTask)}
				>
					<AntDesign name="pluscircleo" size={24} color="white" />
				</TouchableOpacity>
			</View>

			<View style={styles.containerQuant}>
				<View style={styles.subcontainerQuant}>
					<Text style={[styles.contagemText, { color: globalColors.azul }]}>
						Criadas:
					</Text>
					<View style={styles.containerNumber}>
						<Text style={styles.numberText}>
							{tasklist.filter((tasklist) => tasklist.done === false).length}
						</Text>
					</View>
				</View>
				<View style={styles.subcontainerQuant}>
					<Text style={[styles.contagemText, { color: globalColors.roxo }]}>
						Concluídas:
					</Text>
					<View style={styles.containerNumber}>
						<Text style={styles.numberText}>
							{" "}
							{tasklist.filter((tasklist) => tasklist.done === true).length}
						</Text>
					</View>
				</View>
			</View>

			{tasklist.length === 0 ? (
				<View style={styles.containerTasks}>
					<View style={styles.line} />
					<Foundation name="clipboard-pencil" size={60} color="white" />
					<Text style={styles.emptyText}>
						Você ainda não tem tarefas cadastradas
					</Text>
					<Text style={styles.emptySubtext}>
						Crie tarefas e organize seus itens a fazer
					</Text>
				</View>
			) : (
				<ScrollView>
					{tasklist.map((task) => {
						return (
							<Task
								key={task.id}
								onTask={handleTask}
								task={task}
								onRemove={handleRemoveTask}
							/>
						);
					})}
				</ScrollView>
			)}
		</View>
	);
}
