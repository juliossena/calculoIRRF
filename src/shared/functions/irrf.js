const DEDUCTION_PER_DEPENDENT = 164.56;

const baseCalc = (value) => {
  if (value <= 1903.98) {
    return ({
      aliquot: 0,
      deduction: 0,
    });
  }
  if (value <= 2826.65) {
    return ({
      aliquot: 0.075,
      deduction: 142.8,
    });
  }
  if (value <= 3751.05) {
    return ({
      aliquot: 0.15,
      deduction: 354.8,
    });
  }
  if (value <= 4664.68) {
    return ({
      aliquot: 0.225,
      deduction: 636.13,
    });
  }
  return ({
    aliquot: 0.275,
    deduction: 869.36,
  });
};

export const calcBaseSalary = (salary, dependents, socialSecurityDiscount) => (salary
    - socialSecurityDiscount
    - (DEDUCTION_PER_DEPENDENT * dependents));

export const calcDiscountIRRF = (salary, dependents, socialSecurityDiscount) => {
  const resultBaseCalc = baseCalc(salary);
  return (calcBaseSalary(salary, dependents, socialSecurityDiscount)
    * resultBaseCalc.aliquot) - resultBaseCalc.deduction;
};
