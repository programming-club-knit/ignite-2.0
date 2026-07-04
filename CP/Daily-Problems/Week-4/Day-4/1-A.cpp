class Solution {
public:
  string getBinaryRep(int N) {
    string ans = bitset<32>(N).to_string();
    return ans;
  }
};