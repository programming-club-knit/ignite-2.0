class Solution {
  public:
    int powMod(int x, int n, int M) {
        // code here
        long res = 1, curr = x % M;
        
        while (n) {
            if (n % 2 == 1) {
                res = (res * curr) % M;
            }
            
            curr = (curr * curr) % M;
            n /= 2;
        }
        return res;
    }
};
