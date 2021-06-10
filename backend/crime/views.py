import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project.settings")
from services import CrimeServices
class Crime_Api(object):


    @staticmethod
    def main():
        while 1:
            crimeservice = CrimeServices()
            menu = input('0-Exit 1-read_csv 2-read_excel 3-read_json')
            if menu == '0':
                break
            elif menu == '1':
               crimeservice.csv({'context':'./data/', 'fname':'cctv_in_seoul'})
            elif menu == '2':
                crimeservice.xls({'context':'./data/', 'fname':'pop_in_seoul'})
            elif menu == '3':
                crimeservice.json({'context':'./data/', 'fname':'geo_simple'})
            else:
                continue


Crime_Api.main()

