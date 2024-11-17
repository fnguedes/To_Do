import { StyleSheet } from "react-native";
import { globalColors } from "../../../GlobalStyles";

export default StyleSheet.create({
	container: {
		width: "85%",
		height: 70,
		backgroundColor: globalColors.cinzaMedio,
		flexDirection: "row",
		alignSelf: "center",
		marginTop: 15,
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 15,
		borderRadius: 15,
	},
	buttonCheck: {
		height: 30,
		width: 30,
		borderWidth: 2,
		borderColor: globalColors.azul,
		borderRadius: "100%",
	},
	buttonUncheck: {
		height: 30,
		width: 30,
		backgroundColor: globalColors.roxo,
		borderRadius: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: globalColors.branco,
		fontSize: 14,
		fontWeight: "normal",
		textAlign: "center",
	},
	containerText: {
		flex: 1,
		paddingHorizontal: 20,
	},
});
