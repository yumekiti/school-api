## 検証用

```graphql
# ユーザーを取得するクエリ
query getUsers {
  users {
    id
    schoolNumber
    location_visibility
  }
}

# 特定のユーザーを取得するクエリ
query getUserById {
  user(id: 1) {
    id
    schoolNumber
  }
}

# ユーザーを作成するミューテーション
mutation createUser {
  createUser(createUserInput: {
    schoolNumber: 123456
  }) {
    id
    schoolNumber
  }
}

# ユーザーを更新するミューテーション
mutation updateUser {
  updateUser(updateUserInput: {
    id: 1
    schoolNumber: 789012
    location_visibility: false
  }) {
    id
    schoolNumber
  }
}

# ユーザーを削除するミューテーション
mutation deleteUser {
  removeUser(id: 1) {
    id
  }
}
```