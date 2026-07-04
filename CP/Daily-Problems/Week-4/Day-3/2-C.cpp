#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> flowers(n);
    for (int i = 0; i < n; i++) {
        cin >> flowers[i];
    }

    sort(flowers.begin(), flowers.end());

    int count_small = 0, count_large = 0;

    for (int i = 0; i < n; i++) {
        if (flowers[i] == flowers[0]) {
            count_small++;
        }
        if (flowers[i] == flowers[n - 1]) {
            count_large++;
        }
    }

    int max_diff = flowers[n - 1] - flowers[0];

    long long ways;
    if (max_diff == 0) {
        ways = 1LL * n * (n - 1) / 2;
    } else {
        ways = 1LL * count_small * count_large;
    }

    cout << max_diff << " " << ways << endl;
}
