import { input1, input2 } from "./input.js";
import { output1, output2 } from "./output.js";
import { validator } from "./validator.js";
import { inputToOutput } from "./inputToOutput.js";

alert(`${validator(inputToOutput(input1), output1) ? '1 success' : '1 echec'} | ${validator(inputToOutput(input2), output2) ? '2 success' : '2 echec'}`);