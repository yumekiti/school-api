## 検証用

```
# ユーザーを取得するクエリ
query getUsers {
  users {
    id
    studentNumber
  }
}

# 特定のユーザーを取得するクエリ
query getUserById {
  user(id: 5) {
    id
    studentNumber
  }
}

# ユーザーを作成するミューテーション
mutation createUser {
  createUser(createUserInput: {
    studentNumber: 123456
  }) {
    id
    studentNumber
  }
}

# ユーザーを更新するミューテーション
mutation updateUser {
  updateUser(updateUserInput: {
    id: 5
    studentNumber: 789012
  }) {
    id
    studentNumber
  }
}

# ユーザーを削除するミューテーション
mutation deleteUser {
  removeUser(id: 5) {
    id
  }
}
```