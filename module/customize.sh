set -xe

ui_print "Disabling .esim.ability.EuiccGoogleReceiver broadcast receiver for com.android.phone ..."
pm disable com.android.phone/.esim.ability.EuiccGoogleReceiver
ui_print "Done."
