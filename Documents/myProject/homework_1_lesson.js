//1. Если а – четное посчитать а*б, иначе а+б
ifEvenMultiplyIfOddAppend = (a, b) => {
    if (a % 2 === 0) {
       const multiply = a * b;
       console.log(multiply);
    } else if (a % 2 === 1) {
        const append = a + b;
        console.log(append);
    }
};
ifEvenMultiplyIfOddAppend(5, 3);

//2. Определить какой четверти принадлежит точка с координатами (x, y)
getCoordinatePointQuater = (x, y) => {
    if (x < 0 && y > 0) {
        console.log ("четверть А");
    } else if (x > 0 && y > 0){
        console.log ("Четверть Б");
    } else if (x > 0 && y < 0) {
        console.log ("Четверть В");
    } else if (x < 0 && y < 0) {
        console.log ("Четверть Г");
    }
};
getCoordinatePointQuater(-2, 2);

//3. Найти суммы только положительных из трех чисел
getPositiveNumbersAppend = (a, b, c) => {
    let positiveA = 0;
    let positiveB = 0;
    let positiveC = 0;
    let positiveSum;
    if (a > 0) {
         positiveA = a;
    } if (b > 0) {
         positiveB = b;
    } if (c > 0) {
         positiveC = c;
    }
    positiveSum = positiveA + positiveB + positiveC;
    console.log(positiveSum);
};
getPositiveNumbersAppend(-2, 3, 0);

//4.Посчитать выражение макс(а*б*с, а+б+с)+3
getMultiplyAppend3Digits = (a, b, c) => {
    if ((a * b * c) > (a + b + c)) {
        console.log((a * b * c) + 3);

    } else if ((a * b * c) < (a + b + c)) {
        console.log((a + b + c) + 3)
    }
};
getMultiplyAppend3Digits(-10, 2, 3);

//5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил
studentRating = rating => {
    if (0 <= rating && rating <= 19) {
        console.log("да у вас, кол! Оценка F")
    } else if (19 < rating && rating <= 39) {
        console.log("возвращайтесь, когда выучите, Оценка E")
    } else if (39 < rating && rating <= 59) {
        console.log("С натяжкой, Оценка D")
    } else if (59 < rating && rating <= 74) {
        console.log("Вот немного не дотянули! Оценка C")
    } else if (74 < rating && rating <= 89) {
        console.log("Молодец! Оценка B")
    } else if (90 < rating && rating <= 100) {
        console.log("Великолепно! Оценочка A")
    }
};
studentRating(21);

//циклы
//1.Найти сумму четных чисел и их количество в диапазоне от 1 до 99 (от x до y)

getAppendOfEvenNumbers1To99 = (x, y) => {
    let sumOfEven = 0;
    let quantityOfEven = 0;
    for(let i = x; i <= y; i++) {
        if (i % 2 === 0) {
            sumOfEven += i;
            quantityOfEven++
        }
    }
    console.log("сумма четных чисел = " + sumOfEven + ", количество четных чисел = " + quantityOfEven);
};
getAppendOfEvenNumbers1To99(1, 99);

//2.Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
isPrimeNumber = number => {
    if (number < 1)
        return;
    let numberOfDivisions = 0;
    if (number >= 2) {
    for (let i = 0; i <= number; i++) {
        if (number % i === 0) {
        numberOfDivisions++
            }
        }
        if (numberOfDivisions > 2) {
        console.log(number + " Не простое число")
        } else if (numberOfDivisions === 2) {
        console.log(number + " Простое число")
        }
    }
};
isPrimeNumber(577);

//3.Найти корень натурального числа с точностью до целого (рассмотреть вариант
// последовательного подбора и метод бинарного поиска)

getSquareRootCycle = x => {
    if (x <= 0) return;
    let num = 1;
    let rez = 0;
    while (x > 0) {
        x -= num;
        num += 2;
        rez += (x < 0)?0:1;
    }
    console.log("Квадратный корень равен " + rez)
};
getSquareRootCycle(25);

//4.Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

getFactorial = x => {
    if (x <= 0) return;
    let rez = x;
  while (x > 1)  {
      rez = rez * (x - 1);
      x = x - 1;
  }
  console.log("результат факториала равен " + rez)
};
getFactorial(7);

//5.Посчитать сумму цифр заданного числа

getSumOfDigit = x => {
    let rez = 0;
    let sum = 0;
    while (x) {
        sum = x % 10;
        x = (x - sum)/10;
        rez += sum;

    }
    console.log("cумма цифр равна " + rez)
};
getSumOfDigit(909);

//6.Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,
// например, задано число 123, вывести 321.

getMirrorNum = x => {
    let rez = 0;
    let integer = 0;
    let integerSum = 0;
    let exponent = 0;
    while(x > 0) {
        exponent = x.toString().length - 1;
        rez = x % 10;
        integer = rez * Math.pow(10, exponent);
        integerSum = integer + integerSum;
        x = Math.floor(x / 10);
    }
console.log("Зеркальное отображение числа " + integerSum);
    };
getMirrorNum(123);

//Одномерные массивы
// 1. 3. Найти минимальный элемент массива + индекс

const array = [232, 23, -34, 65, 4, 90, 12, 43]

getMinElemArray = array => {
    let min = array[0];
    let indexOfMin = 0;
    for (let i=0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            indexOfMin = i;
        }
    }
    console.log("минимальное значение массива: " + min + " его идекс: " + indexOfMin)
};
getMinElemArray(array);

// 1.4. Найти максимальный элемент массива + индекс
getMaxElemArray = array => {
    let max = array[0];
    let indexOfMax = 0;
    for (let i=0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            indexOfMax = i;
        }
    }
    console.log("максимальное значение массива: " + max + " его идекс: " + indexOfMax)
};
getMaxElemArray(array);

// 5. Посчитать сумму элементов массива с нечетными индексами

getSumOfOddIndexes = array => {
    let oddSum = 0;
    for (let i = 0; i < array.length; i++) {
        if(i % 2 === 1) {
            oddSum = oddSum + array[i]
        }
    }
    console.log("сумма эллементов массива с нечетными индексами равна :" + oddSum);
};
getSumOfOddIndexes(array);

//6. Сделать реверс массива

getReverse = array => {
    let buffer;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            buffer = array[j];
            array[j] = array[j + 1];
            array[j + 1] = buffer;
        }
    }
    console.log("Reverse of array " + array)
};
getReverse(array);

//7. Посчитать количество нечетных элементов массива

getQuantityOfOddElem = array => {
    let qua = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === -1) {
            qua++
        } else if (array[i] % 2 === 1) {
            qua++
        }
    }
    console.log("Количество нечетных элементов в массиве: " + qua)
};
getQuantityOfOddElem(array);

//8. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

const array1 = [1, 2, 3, 4, 5, 6, 7];

getSwapItems = array => {
    let j = 0;
    let buffer = 0;
    let middleIndex = Math.trunc(array.length / 2);
    for(let i = 0; i < array.length/2; i++) {
        if (array.length % 2 === 0) {
            buffer = array[i];
            array[i] = array[middleIndex + i];
            array[middleIndex + i] = buffer;
        } else if (array.length % 2 === 1) {
            if (i === middleIndex) {
                break;
            }
            buffer = array[i];
            array[i] = array[middleIndex + i + 1];
            array[middleIndex + i + 1] = buffer;
        }
    }
    console.log(array + " замена половин массива, с учетом четности массива");
};
getSwapItems(array1);

//9. Отсортировать массив Пузырьком
bubbleSort = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            let a = array[j];
            let b = array[j + 1];
            if (a > b) {
                array[j] = b;
                array[j + 1] = a;
            }
        }
    }
    console.log("Bubble sort " + array);
};
bubbleSort(array);

let array2 = [4, 5, 9, 3, -9, 23];

//сортировка выбором
selectionSort = array => {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }
    }
    console.log("selection sort " + array)
};

selectionSort(array2);

let array3 = [4, 5, 9, 3, -9, 23];
//сортировка вставками
insertionSort = array => {
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        let j = i;
        while (j > 0 && array[j - 1] > current) {
            array[j] = array[j - 1];
            j--
        }
        array[j] = current;
    }
    console.log("insertion sort " + array)
};
insertionSort(array3)
//Функции
//1.Получить строковое название дня недели по номеру дня.

    getDayOfWeek = dayNumber => {
    if (dayNumber === 1) {
        console.log("Понедельник");
    } else if (dayNumber === 2) {
        console.log("Вторник");
    } else if (dayNumber === 3) {
        console.log("Среда");
    } else if (dayNumber === 4) {
        console.log("Четверг");
    } else if (dayNumber === 5) {
        console.log("Пятница");
    } else if (dayNumber === 6) {
        console.log("Суббота");
    } else if (dayNumber === 7) {
        console.log("Воскресенье");
    } else {
        console.log("Такого дня в неделе нет!")
    }
};
getDayOfWeek(4);

//2.Вводим число (0-999), получаем строку с прописью числа.
// 5.Для задания 2 расширить диапазон до 999 миллиардов

getNumberInWords999Billions = y => {
   let exponent = y.toString().length;
   let tens = y => {
       if (y === 1) {
           console.log("Один")
       } else if (y === 2) {
           console.log("Два")
       } else if (y === 3) {
           console.log("Три")
       } else if (y === 4) {
           console.log("Четыре")
       } else if (y === 5) {
           console.log("Пять")
       } else if (y === 6) {
           console.log("Шесть")
       } else if (y === 7) {
           console.log("Семь")
       } else if (y === 8) {
           console.log("Восемь")
       } else if (y === 9) {
           console.log("Девять")
       }
   };
   let hundreds = y => {
       if (1 <= y <= 9) {
           tens(y);
       }
       if(y === 10) {
           console.log(" Десять")
       } else if (y === 11) {
           console.log(" Одинадцать")
       } else if (y === 12) {
           console.log(" Двенадцать")
       } else if (y === 13) {
           console.log(" Тринадцать")
       } else if (y === 14) {
           console.log(" Четырнадцать")
       } else if (y === 15) {
           console.log(" Пятнадцать")
       } else if (y === 16) {
           console.log(" Шестнадцать")
       } else if (y === 17) {
           console.log(" Семнадцать")
       } else if (y === 18) {
           console.log(" Восемнадцать")
       } else if (y === 19) {
           console.log(" Девятнадцать")
       } else if (20 <= y && y <= 29) {
           console.log(" Двадцать" );
           y = y % 10;
           tens(y);
       }  else if (30 <= y && y <= 39) {
           console.log(" Тридцать" );
           y = y % 10;
           tens(y);
       } else if (40 <= y && y <= 49) {
           console.log(" Сорок" );
           y = y % 10;
           tens(y);
       } else if (50 <= y && y <= 59) {
           console.log(" Пятьдесят" );
           y = y % 10;
           tens(y);
       } else if (60 <= y && y <= 69) {
           console.log(" Шестьдесят" );
           y = y % 10;
           tens(y);
       } else if (70 <= y && y <= 79) {
           console.log(" Семдесят" );
           y = y % 10;
           tens(y);
       } else if (80 <= y && y <= 89) {
           console.log(" Восемдесят" );
           y = y % 10;
           tens(y);
       } else if (90 <= y && y <= 99) {
           console.log(" Девяносто" );
           y = y % 10;
           tens(y);
       }
   };
   let thousands = y => {
       if (1 <= y <= 9) {
           tens(y);
       }
       if (100 <= y && y <= 199) {
           console.log (" Сто");
           y = y % 100;
           hundreds(y);
       } else if (200 <= y && y <= 299) {
           console.log (" Двести");
           y = y % 100;
           hundreds(y);
       } else if (300 <= y && y <= 399) {
           console.log (" Триста");
           y = y % 100;
           hundreds(y);
       } else if (400 <= y && y <= 499) {
           console.log (" Четыреста");
           y = y % 100;
           hundreds(y);
       } else if (500 <= y && y <= 599) {
           console.log (" Пятьсот");
           y = y % 100;
           hundreds(y);
       } else if (600 <= y && y <= 699) {
           console.log (" Шестьсот");
           y = y % 100;
           hundreds(y);
       } else if (700 <= y && y <= 799) {
           console.log (" Семьсот");
           y = y % 100;
           hundreds(y);
       } else if (800 <= y && y <= 899) {
           console.log (" Восемьсот");
           y = y % 100;
           hundreds(y);
       } else if (900 <= y && y <= 999) {
           console.log (" Девятьсот");
           y = y % 100;
           hundreds(y);
       }
   };
   let tensOfThousands = y => {
       if (1000 <= y && y <= 1999) {
           console.log (" Одна тысяча");
           y = y % 1000;
           thousands(y);
       } else if (2000 <= y && y <= 2999) {
           console.log (" Две тысячи");
           y = y % 1000;
           thousands(y);
       } else if (3000 <= y && y <= 3999) {
           console.log (" Три тысячи");
           y = y % 1000;
           thousands(y);
       } else if (4000 <= y && y <= 4999) {
           console.log (" Четыре тысячи");
           y = y % 1000;
           thousands(y);
       } else if (5000 <= y && y <= 5999) {
           console.log (" Пять тысяч");
           y = y % 1000;
           thousands(y);
       } else if (6000 <= y && y <= 6999) {
           console.log (" Шесть тысяч");
           y = y % 1000;
           thousands(y);
       } else if (7000 <= y && y <= 7999) {
           console.log (" Семь тысяч");
           y = y % 1000;
           thousands(y);
       } else if (8000 <= y && y <= 8999) {
           console.log (" Восемь тысяч");
           y = y % 1000;
           thousands(y);
       } else if (9000 <= y && y <= 9999) {
           console.log (" Девять тысяч");
           y = y % 1000;
           thousands(y);
       }
   };
   let hundredOfThousands = y => {
       hundreds(Math.floor(y / 1000));
       console.log("тысяч");
       thousands(y % 1000);
   };
   let thousandOfThousands = y => {
       thousands(Math.floor(y / 1000));
       console.log("тысяч");
       thousands(y % 1000);
   };
   let millions = y => {
       tens(Math.floor(y / 1000000));
       console.log("миллионов");
       thousandOfThousands(y % 1000000);
   };
   let tensOfMillions = y => {
       hundreds(Math.floor(y / 1000000));
       console.log("миллионов");
       thousandOfThousands(y % 1000000);
   };
   let hundredsOfMillions = y => {
       thousands(Math.floor(y / 1000000));
       console.log("миллионов");
       thousandOfThousands(y % 1000000);
   };
   let thousandOfMillions = y => {
       tens(Math.floor(y / 1000000000));
       console.log("миллиардов");
       hundredsOfMillions(y % 1000000000);
   };
   let  billions = y => {
       hundreds(Math.floor(y / 1000000000));
       console.log("миллиардов");
       hundredsOfMillions(y % 1000000000);
   };
   let tensOfBillions = y => {
       thousands(Math.floor(y / 1000000000));
       console.log("миллиардов");
       hundredsOfMillions(y % 1000000000);
   };
   if (exponent === 1) {
       if (y === 0) {
           console.log("Ноль")
       } else (tens(y))
   } else if (exponent === 2) {
       hundreds(y);
   } else if (exponent === 3) {
       thousands(y);
   } else if (exponent === 4) {
       tensOfThousands(y);
   } else if (exponent === 5) {
       hundredOfThousands(y);
   } else if (exponent === 6) {
       thousandOfThousands(y);
   } else if (exponent === 7) {
       millions(y);
   } else if (exponent === 8) {
       tensOfMillions(y);
   } else if (exponent === 9) {
       hundredsOfMillions(y);
   } else if (exponent === 10) {
       thousandOfMillions(y);
   } else if (exponent === 11) {
       billions(y)
   } else if (exponent === 12) {
       tensOfBillions(y)
   }
};
getNumberInWords999Billions(658111199876);

// // 3.Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
getWordsInNumbers999 = (z, y, x) => {
    let n = 0;
    let l = 0;
    let k = 0;
    if (x === "ноль") {
        n = 0;
        console.log(n)
    }
    let tens = x => {
    if (x === "один") {
        n = 1;
        console.log(n)
    } else if (x === "два") {
        n = 2;
        console.log(n)
    } else if (x === "три") {
        n = 3;
        console.log(n)
    } else if (x === "четыре") {
        n = 4;
        console.log(n)
    } else if (x === "пять") {
        n = 5;
        console.log(n)
    } else if (x === "шесть") {
        n = 6;
        console.log(n)
    } else if (x === "семь") {
        n = 7;
        console.log(n)
    } else if (x === "восемь") {
        n = 8;
        console.log(n)
    } else if (x === "девять") {
        n = 9;
        console.log(n)
    }
    };
    if (x === "десять") {
        n = 10;
        console.log(n)
    } else if (x === "одинадцать") {
        n = 11;
        console.log(n)
    } else if (x === "двенадцать") {
        n = 12;
        console.log(n)
    } else if (x === "тринадцать") {
        n = 13;
        console.log(n)
    } else if (x === "четырнадцать") {
        n = 14;
        console.log(n)
    } else if (x === "пятнадцать") {
        n = 15;
        console.log(n)
    } else if (x === "шестнадцать") {
        n = 16;
        console.log(n)
    } else if (x === "семнадцать") {
        n = 17;
        console.log(n)
    } else if (x === "восемндацать") {
        n = 18;
        console.log(n)
    } else if (x === "девятнадцать") {
        n = 19;
        console.log(n)
    }
    tens(x);
    let thousands = y => {
        if (y === "двадцать") {
            l = 20 + n;
            console.log(l)
        } else if (y === "тридцать") {
            l = 30 + n;
            console.log(l)
        } else if (y === "сорок") {
            l = 40 + n;
            console.log(l)
        } else if (y === "пятьдесят") {
            l = 50 + n;
            console.log(l)
        } else if (y === "шестьдесят") {
            l = 60 + n;
            console.log(l)
        } else if (y === "семьдесят") {
            l = 70 + n;
            console.log(l)
        } else if (y === "восемьдесят") {
            l = 80 + n;
            console.log(l)
        } else if (y === "девяносто") {
            l = 90 + n;
            console.log(l)
        }
    };
    thousands(y);
    let hundreds = z => {
        if (z === "сто") {
            k = 100 + l;
            console.log(k)
        } else if (z === "двести") {
            k = 200 + l;
            console.log(k)
        } else if (z === "триста") {
            k = 300 + l;
            console.log(k)
        } else if (z === "четыреста") {
            k = 400 + l;
            console.log(k)
        } else if (z === "пятьсот") {
            k = 500 + l;
            console.log(k)
        } else if (z === "шестьсот") {
            k = 600 + l;
            console.log(k)
        } else if (z === "семьсот") {
            k = 700 + l;
            console.log(k)
        } else if (z === "восемьсот") {
            k = 800 + l;
            console.log(k)
        } else if (z === "девятьсот") {
            k = 900 + l;
            console.log(k)
        }
    };
    hundreds(z)
};

    getWordsInNumbers999("девятьсот", "двадцать", "девять")


//4.Найти расстояние между двумя точками в двумерном декартовом пространстве.
getDistance = (x1, y1, x2, y2) => {
    let diffX = x1 - x2;
    let diffY = y1 - y2;
    let distance = Math.sqrt((diffX * diffX) + (diffY * diffY));
    console.log("Расстояние между координатами: " + distance)
};
getDistance(2,1,5,2);
