if(Esc<Esc1,Esc*Es/1.15,
    if(Esc>=Esc1 and Esc<=Esc2, 

        Fsc1+((Fsc2-Fsc1)*(Esc-Esc1)/(Esc2-Esc1)),

        if
        (Esc>=Esc2 and Esc<=Esc3,

            Fsc2+((Fsc3-Fsc2)*(Esc-Esc2)/(Esc3-Esc2))

        ,if
        (Esc>=Esc3 and Esc<=Esc4

            ,Fsc3+((Fsc4-Fsc3)*(Esc-Esc3)/(Esc4-Esc3))

            ,if
            (Esc>=Esc4 and Esc<=Esc5,

                Fsc4+((Fsc5-Fsc4)*(Esc-Esc4)/(Esc5-Esc4))

                ,if
                (Esc>=Esc5 and Esc<=Esc6,

                    Fsc5+((Fsc6-Fsc5)*(Esc-Esc5)/(Esc6-Esc5)),
                    
                    if(Esc>Esc6,Fsc6,0)))))))