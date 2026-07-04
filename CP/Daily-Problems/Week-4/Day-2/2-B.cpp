class Solution {
public:
    bool isPerfectSquare(int num) {
        int low = 1, high = num, ans;

        while (low <= high) {
            long long mid = low + (high - low)/2;

            if (mid * mid > num) high = mid - 1;
            else {
                ans = mid;
                low = mid + 1;
            }
        }

        return (ans * ans == num);
    }
};
