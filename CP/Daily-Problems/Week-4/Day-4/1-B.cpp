class Solution {
public:
  bool isPowerofTwo(int n) {
    if (n == 1)
      return true;
    if (n == 0)
      return false;
    bool ok = n & (n - 1);
    if (ok == 0)
      return true;
    else
      return false;
  }
};