export default class ValidateUtils{

	static isValidAge(age) {
		return age > 0 && age < 160
	}

	static isEmpty(value){
		return value === "";
	}



}