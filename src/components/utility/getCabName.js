export default (cabId) => {
    switch (cabId) {
      case 0:
        return 'Any';
      case 1:
        return 'Mini';
      case 2:
        return 'Prime Play';
      case 3:
        return 'Prime Sedan';
      case 4:
        return 'Prime SUV';
      case 5:
        return 'Prime EXEC';
      default:
        return 'Any';
    }
  };

