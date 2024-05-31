CREATE MIGRATION m15y2a3ktb7qvaylyu6lyvhudurqqbwgntvzx42x5asdxicbuzph7q
    ONTO initial
{
  CREATE TYPE default::Person {
      CREATE REQUIRED PROPERTY _modified_date: cal::local_datetime;
      CREATE REQUIRED PROPERTY first_name: std::str {
          CREATE CONSTRAINT std::min_len_value(1);
      };
      CREATE REQUIRED PROPERTY last_name: std::str {
          CREATE CONSTRAINT std::min_len_value(1);
      };
      CREATE PROPERTY middle_name: std::str {
          CREATE CONSTRAINT std::min_len_value(1);
      };
  };
};
