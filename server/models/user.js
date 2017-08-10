import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Sorry, this username is already taken'
      },
      validate: {
        notEmpty: {
          msg: 'Username field empty'
        }
      },
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'First name field empty'
        }
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Last name field empty'
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'password field is empty'
        }, 
        len: [6,20],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'This email is already taken.'
      },
    access: {
      defaultValue: 'user',
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['admin', 'user']],
          msg: 'access can only be user or admin'
        }
      }
    },
      validate: {
        isEmail: {
          args: true,
          msg: 'Enter a valid email',
        },
        notEmpty: {
          msg: 'Email field is empty'
        }
      },
    },
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      },
      beforeUpdate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },


  });
  User.associate = (models) => {
    User.hasMany(models.Book, {
      foreignKey: 'userId',
      as: 'books',
    });
  };

  User.associate = (models) => {
    User.hasMany(models.History, {
      foreignKey: 'userId',
      as: 'histories',
    });
  };

  User.prototype.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
  };

  return User;
};