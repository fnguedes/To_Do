import { StyleSheet } from "react-native";
import { globalColors } from "../../GlobalStyles";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: globalColors.cinzaEscuro,
	},
	containerTitle: {
		width: "100%",
		height: 173,
		flexDirection: "row",
		backgroundColor: globalColors.preto,
		paddingTop: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	Title: {
		fontSize: 30,
		fontWeight: "bold",
		color: globalColors.azul,
	},
	containerInput: {
		width: "100%",
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		marginTop: 142,
	},
	input: {
		width: "70%",
		height: 56,
		backgroundColor: globalColors.cinzaMedio,
		borderRadius: 6,
		paddingHorizontal: 15,
		fontSize: 16,
		color: "#fff",
	},
	button: {
		width: 52,
		height: 52,
		borderRadius: 9,
		backgroundColor: globalColors.azul,
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 15,
	},
	containerQuant: {
		width: "100%",
		height: 40,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: "7.5%",
		marginTop: 50,
		marginBottom: 10,
	},
	contagemText: {
		fontSize: 16,
		fontWeight: "bold",
		marginRight: 15,
	},
	subcontainerQuant: {
		flexDirection: "row",
	},
	containerNumber: {
		width: 25,
		height: 25,
		backgroundColor: globalColors.cinzaMedio,
		borderRadius: 9,
		justifyContent: "center",
		alignItems: "center",
	},
	numberText: {
		fontSize: 16,
		fontWeight: "bold",
		color: globalColors.branco,
	},
	line: {
		width: "85%",
		height: 2,
		backgroundColor: globalColors.cinzaClaro,
		alignSelf: "center",
		marginBottom: 60,
	},
	containerTasks: {
		flex: 1,
		alignItems: "center",
		marginTop: 10,
	},
	emptyText: {
		fontSize: 16,
		fontWeight: "bold",
		color: globalColors.cinzaClaro,
		marginTop: 20,
	},
	emptySubtext: {
		fontSize: 14,
		color: globalColors.cinzaClaro,
		marginTop: 5,
	},
});
