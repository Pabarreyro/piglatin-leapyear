# **Pig Latin & Leap Year**

#### By William Chu and Pablo Barreyro

## Pig Latin Description

Order of building
* satisfies spec for lowercase single word inputs
* satisfies spec for mixed case single word inputs
* satisfies spec for lowercase multi-word inputs
* satisfies spec for mixed case multi-word inputs
* rejects num/symbol inputs

* For words beginning with a vowel, add "way" to the end.
  * Input Example: ask
  * Output Example: askway


* For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
  * Input Example: task, place
  * Output Example: asktay, aceplay


* For words beginning with "y", treat "y" as a consonant.
  * Input Example: yet
  * Output Example: etyay


* If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
  * Input Example: quite
  * Output Example: itequay


## Leap Year Description

* The program should return when a year is not a leap year.
  * Input Example: 1993
  * Output Example: false


* The program should return 'true' for years divisible by 4, since those are leap years.
  * Input Example: 2004
  * Output Example: true


* The program should return 'false' for years divisible by 100, since those are not leap years.
  * Input Example: 1900
  * Output Example: false


* The program should return 'true' for years divisible by 400, since those are leap years.
  * Input Example: 2000
  * Output Example: true


## Setup/Installation Requirements

* To view project code, _clone repository from_ https://github.com/william-chu/projectname
* To view project, _open in web browser_ http://william-chu.github.io/projectname

## Technologies Used

* HTML
* CSS _(Bootstrap)_
* JavaScript _(jQuery)_

## License

* GPL

Copyright (c) 2018 **_William Chu & Pablo Barreyro_**
