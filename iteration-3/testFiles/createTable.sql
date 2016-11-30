drop table markers;
create table markers (
id int not null primary key,
name varchar2 (20),
description varchar2(100),
lat number(10,6) not null,
lng number(10,6) not null
);

set serveroutput on

spool 328hw4-out.txt

create or replace procedure insertMarker(name varchar2, description varchar2, lat number, lng number) as

begin
   insert into markers (name, description, lat, lng)
   values
   (name, description, lat, lng);
end;
/
show errors

spool off
drop sequence test_sequence;
create sequence test_sequence
start with 1
increment by 1;

create or replace trigger test_trigger
before insert
on markers
referencing new as new
for each row
begin
select test_sequence.nextval into :new.id from dual;
end;
/
