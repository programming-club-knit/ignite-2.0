class Solution {
public:
    int mySqrt(int x) {
        int high = x, low = 0, ans = 0;

        while (low <= high) {
            long long mid = (low + high)/2;

            if (mid * mid > x) {
                high = mid - 1; 
            } else {
                ans = mid;
                low = mid + 1;
            }
        }
        return ans;
    }
};
