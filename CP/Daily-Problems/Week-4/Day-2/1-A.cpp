class Solution {
  public:
    int decimalEquivalent(string &s, int b) {
        // code here
        int dec = 0, value = 0;
        
        for (char c : s) {
            if (c >= '0' && c <= '9') value = c - '0';
            else value = 10 + (c - 'A');
            
            dec = dec*b + value;
        }
        return dec;
    }
};
