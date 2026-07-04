class Solution {
public:
  int findDuplicate(vector<int> &nums) {
    int n = nums.size() - 1;
    int ans = 0;

    for (int bit = 0; bit < 32; bit++) {
      int mask = 1 << bit;

      int arrayCount = 0;
      int rangeCount = 0;

      for (int num : nums) {
        if (num & mask)
          arrayCount++;
      }

      for (int i = 1; i <= n; i++) {
        if (i & mask)
          rangeCount++;
      }

      if (arrayCount > rangeCount)
        ans |= mask;
    }

    return ans;
  }
};