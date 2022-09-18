export default (cabId) => {
    switch (cabId) {
      case 0:
        return 'Any';
      case 1:
        return 'Auto';
      case 2:
        return 'Mini';
      case 3:
        return 'Prime Play';
      case 4:
        return 'Prime Sedan';
      case 5:
        return 'Prime SUV';
      case 6:
        return 'Prime EXEC';
      default:
        return 'Any';
    }
  };

