import { exportAllDeclaration } from "@babel/types";

test('test setup working', () => {
    exportAllDeclaration(true). toBeTruthy()
})