let column_1 = [4, 2, 3, 2, 7, 4, 9, 9, 5, 9, 3, 4, 5, 4, 4, 6, 10, 9, 6, 6, 4, 8, 2, 1, 6, 5, 1, 7, 6, 3];

let column_2 = [1, 2, 6, 7, 1, 5, 6, 7, 1, 3, 10, 6, 10, 3, 4, 6, 5, 9, 7, 4, 6, 9, 8, 8, 2, 8, 8, 7, 7, 1];

let column_3 = [74, 68, 41, 46, 58, 63, 95, 65, 76, 43, 44, 43, 79, 46, 92, 85, 62, 99, 69, 74, 85, 85, 84, 49, 95, 56, 54, 78, 46, 64];

let column_4 = [66, 85, 42, 77, 86, 58, 77, 84, 87, 42, 68, 90, 87, 44, 42, 95, 88, 55, 82, 44, 83, 79, 99, 95, 66, 55, 85, 54, 100, 51];

let sum_1 = 0, sum_2 = 0, sum_3 = 0, sum_4 = 0;

for (let i = 0; i < 30; i++) { 
  sum_1 += column_1[i];
  sum_2 += column_2[i];
  sum_3 += column_3[i];
  sum_4 += column_4[i];
}

let sums = [sum_1, sum_2, sum_3, sum_4];

let total_score = sum_1 + sum_2 + sum_3 + sum_4;

const results = {
	col1: column_1,	
	col2: column_2,   	
	col3: column_3,	
	col4: column_4,	
	sums: sums,
	total_score: total_score
}

console.log(results);