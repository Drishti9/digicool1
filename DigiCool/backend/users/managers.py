from django.contrib.auth.base_user import BaseUserManager
from django.db import models

class UserManager(BaseUserManager):
    use_in_migrations=True

    def create_user(self, phone, password, **extra_fields):
        if not phone:
            raise ValueError("Users must have an phone")
        user = self.model(
            phone=phone,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user
        
    def create_superuser(self, phone,username, password, **extra_fields):
        extra_fields.setdefault("is_superuser", True)
        user = self.create_user(
        phone=phone,
        password=password,
        username=username,
        )
        # user.is_admin = True
        # user.is_staff = True
        # user.is_superuser = True
        user.save(using=self._db)
        return user