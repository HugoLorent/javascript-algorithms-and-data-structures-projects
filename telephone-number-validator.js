function telephoneCheck(str) {
  const validPatterns = [
    // 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/,

    // 1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/,

    // 1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,

    // 5555555555
    /^\d{10}$/,

    // (555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,

    //1 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/,

    // 1(555)555-5555
    /^1\(\d{3}\)\d{3}-\d{4}$/,
  ];

  return validPatterns.some((pattern) => pattern.test(str));
}

console.log(telephoneCheck('555-555-5555'));
console.log(telephoneCheck('1 555-555-5555'));
console.log(telephoneCheck('1 (555) 555-5555'));
console.log(telephoneCheck('5555555555'));
console.log(telephoneCheck('(555)555-5555'));
console.log(telephoneCheck('1(555)555-5555'));
console.log(telephoneCheck('555-5555'));
console.log(telephoneCheck('5555555'));
console.log(telephoneCheck('1 555)555-5555'));
console.log(telephoneCheck('1 555 555 5555'));
console.log(telephoneCheck('1 456 789 4444'));
